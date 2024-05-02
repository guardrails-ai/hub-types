dev:
	pip install -e ".[dev]"

lint:
	ruff check .

test:
	pytest ./tests

type:
	pyright guardrails_hub_types

qa:
	make lint
	make type
	make tests