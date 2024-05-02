dev:
	pip install -e ".[dev]"

install:
	pip install -r requirements.txt

install-dev:
	make install
	pip install -r dev-requirements.txt

lint:
	ruff check ./guardrails_hub_types

lint-fix:
	ruff check ./guardrails_hub_types --fix

type:
	# Fails bc pyright doesn't account for hasattr checks
	pyright guardrails_hub_types 

qa:
	make lint
	make type