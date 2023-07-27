import os

print("Content-Type: text/html")
print()

form = cgi.FieldStorage()
user_message = form.getvalue('message')


os.environ["WOLFRAM_ALPHA_APPID"] = "6PVJ2L-3WK3UAPW58"

from langchain.utilities.wolfram_alpha import WolframAlphaAPIWrapper

wolfram = WolframAlphaAPIWrapper()

respone=wolfram.run()


