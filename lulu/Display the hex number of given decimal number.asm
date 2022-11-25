.MODEL SMALL 
.STACK 100h 
.DATA
Menu    DB    10, 13, 'Enter a choice (1 or 2):'
DB    10, 13, '1) Convert 1 to 5 Decimal values to Hex'
DB    10, 13, '2) Quit Program', 10, 13, '$'       
MenuErr    DB    10, 13, 'Choice must be a 1, 2, or 3!'
DB    10, 13, 'Try again!', 10, 13, '$'
AskDec    DB    10, 13, 'Enter a number with 1 to 5 digits: ', 10, 13, '$'       
.CODE
START    PROC
MOV AX, @DATA                ; Startup code 
MOV DS, AX
dispMenu:
MOV DX, OFFSET Menu            ; Display menu 
MOV AH, 09H
INT 21H
MOV AH, 01H                    ; Get keyboard input 
INT 21H
CMP AL, '1'     
JL dispErr
CMP AL, '3'     
JG dispErr
CMP AL, '1'     
JE goDec
CMP AL, '2'     
JE goQuit
dispErr:
MOV DX, OFFSET MenuErr        ; Display menu error. 
MOV AH, 09H
INT 21H
JMP dispMenu     
goDec:    
CALL DEC2HEX                ; Call DEC2HEX procedure. 
JMP dispMenu
goQuit:   
MOV AL, 0                    ; Exit program. 
MOV AH, 4CH
INT 21H    
START ENDP
DEC2HEX PROC       
; *** Accept a decimal value (up to 5 digits) > print it's hex value.
Again:
MOV DX, OFFSET AskDec 
MOV AH, 09H
INT 21H
MOV AX, 0                     ; Clear AX
PUSH AX                        ; Save AX to stack (else overwritten when 0Dh is pressed)       
MOV AH, 01H                    ; Get keyboard input
INT 21H
CMP AL, 0Dh                    ; If Return is entered, start division. 
JE SDiv1
CMP AL, '0'     
JL Again
CMP AL, '9'     
JG Again
MOV AH, 0                    ; Change to a digit. 
SUB AL, 30h    
MOV CX, AX                    ; Save digit in CX 
pop ax
MOV BX, 10                    ; Division by 10. 
MUL BX  
ADD AX, CX                    ; Add CX (original number) to AX (number after multiplication). 
PUSH AX                        ; Save on stack.
JMP Again                    ; Repeat. 
mov cx, 0
MOV BX, 16    
pop ax
SDiv1:
Div1:   
DIV BX                      ; Divide (Word-sized). 
PUSH DX                     ; Save remainder.
ADD CX, 1                   ; Add one to counter   
MOV DX, 0                   ; Clear Remainder (DX)
CMP AX, 0                   ; Compare Quotient (AX) to zero 
JNE Div1                      ; If AX not 0, go to "Div1:"
getHex:                            ; Get hex number. 
MOV DX, 0                    ; Clear DX.
; Put top of stack into DX.
POP DX    
ADD DL, 30h                    ; Conv to character. 
CMP DL, 39h                    ; If DL > 39h (character 9)...
JG MoreHex
HexRet:                            ; Display hex number 
MOV AH, 02h                    ; 02h to display DL
INT 21H                        ; Send to DOS
LOOP getHex                 ; LOOP subtracts 1 from CX. If non-zero, loop.   
JMP Skip
MoreHex:                        ; Add 7h if DL > 39h (10-15)
ADD DL, 7h                    ; Add another 7h to DL to get into the A-F hex range. 
JMP HexRet                    ; Return to where it left off before adding 7h.
Skip:                            ; Skip addition of 7h if it is not needed.
RET 
DEC2HEX ENDP
END START