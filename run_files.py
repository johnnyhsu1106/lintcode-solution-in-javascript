import os
import sys



def run_all_files():
    execute_fname = 'run_files.py'
    dirs = os.listdir(os.getcwd())
    js_files = [js_file for js_file in dirs if js_file[-3:]=='.js' and js_file != execute_fname]
    count = 0


    for js_file in js_files:
        print(js_file)
        count += 1
        os.system( "node " + js_file)

    print('All ' + str(count)  + ' files can be executed successfully.')

def main():
    run_all_files()


if __name__ == '__main__':
    main()
