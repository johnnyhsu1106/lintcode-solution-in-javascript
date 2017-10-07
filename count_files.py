import os

def count_files():
    execute_fname = 'run_files.py'
    dirs = os.listdir(os.getcwd())
    js_files = [ js_file for js_file in dirs \
                if js_file[-3:]=='.js' \
                and js_file[0:3].isdigit()]

    print(len(js_files))


def main():
    count_files()


if __name__ == '__main__':
    main()
