.model small
.stack 100h
.data
.code
main proc
mov bl,2
mov dl,1
add dl,bl
add dl,48
mov ah,2
INT 21h

mov ah,4ch
INT 21h
main endp
end main