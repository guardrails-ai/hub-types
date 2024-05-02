env:
	python3 -m venv ./.venv

install:
	pip install -r requirements.txt

lock:
	pip freeze > requirements-lock.txt

install-lock:
	pip install -r requirements-lock.txt