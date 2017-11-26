@echo off

title DEVELOPED BY DARKGHOST
FOR /f "TOKENS=2* DELIMS=:" %%y IN ('ipconfig^| FIND "IPv4"') DO set ax=%%y
color a
echo %ax%
pause>nul