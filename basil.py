from flask import Flask, render_template

app = Flask(__name__)                 

@app.route('/')               

@app.route('/index')
def success():
      return render_template('index.html')


@app.route('/recipe')
def recipe():
    return render_template('result.html')
    

app.run(debug=True)
