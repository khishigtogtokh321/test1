X = 0  # Глобал хувьсагч

def fie():
    global X
    X += 1

def foo():
    global X
    X += 1
    fie()

Y = int(input())  # Хэрэглэгчээс утга авах
if Y > 0:
    X_local = 5  # Локал хувьсагч (гэхдээ нөлөөлөхгүй)
    foo()
else:
    foo()

print(X)  # Гаралтыг хэвлэх
