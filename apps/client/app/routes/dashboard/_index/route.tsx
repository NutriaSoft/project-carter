export default function DashboardIndex() {
	return (
		<>
			<h2>Dashboard Home</h2>
			<p>Bienvenido a la página principal del Dashboard.</p>
			<div className="grid auto-rows-min gap-4 md:grid-cols-3">
				<div className="aspect-video rounded-xl bg-muted/50" />
				<div className="aspect-video rounded-xl bg-muted/50" />
				<div className="aspect-video rounded-xl bg-muted/50" />
			</div>
			<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
		</>
	);
}
