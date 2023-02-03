<svelte:head>
	<title>Three Column Preview Card 🎴</title>
	<link rel="icon" type="image/png" href="static/favicon-32x32.png" />
</svelte:head>

<main class="flex justify-center items-center -md:items-start h-screen -md:mx-8 -md:my-20">
	<div class="grid grid-cols-3 -md:grid-cols-1 h-[500px] w-[800px] -lg:w-[700px]">
		<div
			class="flex flex-col justify-end bg-bright-orange p-12 rounded-l-xl -md:rounded-l-none -md:rounded-t-xl"
		>
			<img src="static/icon-sedans.svg" class="w-16 mb-8" alt="Logo of a sedan car" />
			<h2 class="text-white font-big-shoulders text-4xl mb-6">SEDANS</h2>
			<p class="mb-auto text-transparent-white font-lexend-deca text-sm leading-6 -md:mb-8">
				Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the
				city or on your next trip.
			</p>
			<button
				class="font-lexend-deca bg-white text-bright-orange rounded-full py-3 px-8 text-sm -lg:text-xs w-fit hover:text-white hover:outline-white hover:outline-2 hover:outline transition-all hover:bg-bright-orange"
				>Learn More</button
			>
		</div>
		<div class="flex flex-col justify-end bg-dark-cyan p-12">
			<img src="static/icon-suvs.svg" class="w-16 mb-8" alt="Logo of a SUV" />
			<h2 class="text-white font-big-shoulders text-4xl mb-6">SUVS</h2>
			<p class="mb-auto text-transparent-white font-lexend-deca text-sm leading-6 -md:mb-8">
				Take an SUV for its spacious interior, power and versatility. Perfect for your next family
				vacation and off-road adventures
			</p>
			<button
				class="font-lexend-deca bg-white text-dark-cyan rounded-full py-3 px-8 text-sm -lg:text-xs w-fit hover:text-white hover:outline-white hover:outline-2 hover:outline transition-all hover:bg-dark-cyan"
				>Learn More</button
			>
		</div>
		<div
			class="flex flex-col justify-end bg-very-dark-cyan p-12 rounded-r-xl  -md:rounded-r-none -md:rounded-b-xl"
		>
			<img src="static/icon-luxury.svg" class="w-16 mb-8" alt="Logo of a luxury car" />
			<h2 class="text-white font-big-shoulders text-4xl mb-6">LUXURY</h2>
			<p class="mb-auto text-transparent-white font-lexend-deca text-sm leading-6 -md:mb-8">
				Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a
				luxury rental and arrive in style
			</p>
			<button
				class="font-lexend-deca bg-white text-very-dark-cyan rounded-full py-3 px-8 text-sm -lg:text-xs w-fit hover:text-white hover:outline-white hover:outline-2 hover:outline transition-all hover:bg-very-dark-cyan"
				>Learn More</button
			>
		</div>
	</div>
</main>
