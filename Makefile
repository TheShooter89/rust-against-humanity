run:
	RUST_ENV=debug cargo run

buildrun:
	cd client && npm run build &&	cd - && sass --no-source-map static/scss/custom:static/css && RUST_ENV=debug cargo run
