@echo off
title DEVELOPED BY DARKGHOST
FOR /f "TOKENS=2* DELIMS=:" %%y IN ('netsh interface ipv4 show interfaces "ethernet" ^| FIND "connected"') DO (echo %%y)

exit