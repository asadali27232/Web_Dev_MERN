;dosseg
.model small
.stack 100h
.data
arr1 db 'k','c','n','g'
.code
main proc
mov ax,@data
mov ds,ax
mov si, offset arr1
mov cx, 4
L1:
mov ax, [si]
push ax
inc si
loop L1
mov cx, 4
L2:
pop dx
mov ah, 2
int 21h
inc si
loop L2
mov ah,4ch
int 21h
main endp
end main