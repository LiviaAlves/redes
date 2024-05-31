import socket

HOST, PORT = "localhost", 8000

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    request = b"GET / HTTP/1.1\r\nHost: localhost:8000\r\n\r\n"
    s.sendall(request)
    response = s.recv(1024)
    print(response.decode("utf-8"))
