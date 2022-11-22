.model small
.stack 100h
.data
.code
main proc
mov dl, 'A'
mov ah,2
INT 21h
mov dl, 'L'
mov ah,2
INT 21h
mov dl, 'I'
mov ah,2
INT 21h
mov ah, 4ch
INT 21h
main endp
end main