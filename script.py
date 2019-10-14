import sys

def addFunction():
    a = int(sys.argv[1])
    b = int(sys.argv[2])
    print(a + b)
    sys.stdout.flush()

addFunction()