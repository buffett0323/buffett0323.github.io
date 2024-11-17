import os

# Directory containing the images
image_folder = 'public/static/tech'

# List of image filenames that should be retained
retain_images = {
    'cpp-logo.png',
    'css-logo.png',
    'docker-logo.png',
    'git-logo.png',
    'html-logo.png',
    'js-logo.png',
    'node-logo.png',
    'next-logo.png',
    'python-logo.png',
    'pytorch-logo.png',
    'react-logo.png',
    'ts-logo.png',
    'mongodb_original_wordmark_logo_icon_146425.png',
    'icons8-flask-500.png',
    'postgresql.png',
    'google.png',
    'opencv.png',
    'c-sharp.png',
    'tensorflow.png',
    'hf-logo.png',
    'mysql.png',
    'go-logo.png',
    'netlogo.png',
    'openai.png'
}

# Remove files not in the retain list
removed_files = []
if os.path.exists(image_folder):
    for file_name in os.listdir(image_folder):
        if file_name not in retain_images:
            file_path = os.path.join(image_folder, file_name)
            if os.path.isfile(file_path):
                os.remove(file_path)
                removed_files.append(file_name)

removed_files
