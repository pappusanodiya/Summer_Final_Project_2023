#!/usr/bin/python3

print("content-type:text/plain")
print()

import os
import cgi

form = cgi.FieldStorage()

#check if the file was uploaded
file_item = form['uploadfile']

# Define the upload folder
UPLOAD_FOLDER = "mydata"

#check if a file was selected fro upload
if file_item.filename:
	# Get the filename and create the full path
	filename = os.path.basename(file_item.filename)
	filepath = os.path.join(UPLOAD_FOLDER, filename)

	# Save the uploaded file to the server
