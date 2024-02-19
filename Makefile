run:
	RUST_ENV=debug cargo run

buildrun:
	cd client && npm run build &&	cd - && RUST_ENV=debug cargo run
