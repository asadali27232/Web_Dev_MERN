.model small
.stack 100h
.data
S1 db "Helloworld$"
.code
main proc
mov ax,@data
mov ds,ax
lea dx,s1
mov ah,9
INT 21h
mov ah,4ch
INT 21h

main endp
end main