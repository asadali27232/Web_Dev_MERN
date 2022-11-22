                                     .model small
.stack 90h   
.data 
counter db 0 
curValue db 0 
prevValue db 0 
octal db 0 
msg db "Enter a decimal number and press Enter: $" 
octmsg db 13,10,"In octall: $"
.code 
main proc
mov ax, @data           ;initialize DS 
mov ds, ax 
;load and display the string msg
mov ah, 09h 
lea dx, msg  
int 21h
accept: 
mov ah, 01     
int 21h                 ;read a digit
cmp al, 13              ;compare al with 13
je exit                ;jump to label exit if input is 13 
sub al, 48              ;subract al with 48
mov curValue, al        ;move al to curValue 
cmp counter, 1          ;compare counter with 1 
jl inc_ctr              ;jump to label inc_ctr if al<1
mov al, prevValue      ;move prevValue to al 
mov bl, 10
mul bl
add al, curValue        ;add curValue to al 
mov prevValue, al       ;move al tp prevValue 
inc counter             ;inc_ctr counter
jmp accept              ;jump to label accept 
inc_ctr:
mov prevValue, al       ;move al to prevValue 
inc counter                 ;inc_ctr counter
jmp accept              ;jump to label accept 
exit:
mov bl,prevValue         ;move prevValue to bl 
mov octal, bl            ;move bl to octal
xor bx, bx               ;clear bx
jmp convertTooctall      ;jump to convertTooctall 
convertTooctall:
mov ah, 09h              ;load and display the string ctmsg 
lea dx, octmsg
int 21h 
mov bh, octal            ;move octal to bh 
and bh, 192              ;multiply 192 to bh          
mov cl, 2               ;move 2 to cl
rol bh, cl              ;rotate bh 2x
add bh, 48              ;add 48 to bh 
mov ah, 02              ;set the output function 
mov dl, bh              ;move bh to dl
int 21h                 ;print the character 
mov bh, octal           ;move octal to bh
and bh, 56              ;add 56 to bh
mov cl, 5               ;move 5 to cl
rol bh, cl              ;rotate bh 5x
add bh, 48              ;add 48 to bh
mov ah, 02              ;set the output function 
mov dl, bh             ;move bh to dl
int 21h                 ;print the character 
mov bh, octal            ;move octal to bh
and bh, 7               ;mulptiply by 7
add bh, 48              ;add 48 to bh
mov ah, 02              ;set the output function 
mov dl, bh             ;move bh to dl
int 21h                 ;print the character 
mov ah, 04ch            ;return control to DOS
int 21h 
main endp
end main