export default {
	async fetch(request, env) {
		const prompts = [
			'Illustrate a character reading quietly beneath a giant tree in an enchanted Ghibli meadow. The background includes distant mountains and hidden forest spirits (kodama). The style uses vibrant, natural colors, detailed shading, and bright sunlight filtering through the leaves. The mood is peaceful and magical.',
			'A peaceful, hand-drawn illustration in the style of Studio Ghibli, featuring a serene landscape with lush green rolling hills, a small cottage, and a clear blue sky with soft white clouds. Use soft, natural colors and gentle morning mist. The atmosphere is warm, whimsical, and calm. Highly detailed, 4K.',
			'Ghibli-style digital painting of a bridge over a gently flowing river at twilight. Fireflies glow in the air, and cherry blossom petals float in the wind. The lighting is soft and dreamy, with warm hues. The environment is rich with detailed nature and a tranquil atmosphere.',
			'A peaceful views with ghibli style',
			'An adventurous young traveler with a large backpack and a wide-brimmed hat, standing on a grassy hill overlooking a serene valley with a winding river, distant floating islands, and lush, vibrant forests, in the art style of a Studio Ghibli film, soft pastel colors, dreamy lighting, highly detailed natural background, whimsical atmosphere, hand-drawn aesthetic.',
			'A serene anime-style valley at sunrise, pastel colors, floating magical fireflies, a lone traveler walking along an open path, soft painterly Ghibli atmosphere.',
			'A tranquil forest clearing with glowing mushrooms and sun rays cutting through mist, hyper-detailed lighting, a young explorer studying an ancient rune stone, emotional Shinkai sky.',
			'A peaceful open field with tall grass swaying, sparkling magic drifting in the air, a traveler holding a lantern, crisp linework and dramatic composition like a fantasy light novel cover.',
			'A calm lakeside village with floating lanterns and magical reflections, a traveler resting on a pier, vibrant colors and dynamic detailing like a JRPG key art poster.',
			'An open meadow with oversized magical flowers glowing faintly, gentle sparkles, a wandering mage exploring with curiosity, soft watercolor tones and warm atmosphere.',
			'A glowing bioluminescent forest trail at dusk, soft mist, an explorer with a staff walking quietly, detailed lighting and cinematic framing.',
			'A mountaintop shrine above the clouds, floating petals, ancient magic symbols shining, a traveler in heroic pose, striking composition made for a fantasy novel cover.',
			'A magical river with crystal water and glowing fish, soft pastel lighting, an explorer kneeling by the water, highly detailed textures and adventure-game energy.',
			'Peaceful ruins overtaken by nature, vines glowing with soft magic, a cheerful traveler examining an artifact, hand-painted Ghibli environment feel.',
			'A wide open sky with drifting clouds and a floating island below, a small traveler at the edge looking outward, dramatic sky gradients and cinematic atmosphere.',
			'An enchanted forest library with sunlight through leaves, floating magical books, a young explorer discovering secrets, clean line art and dynamic pose.',
			'A field of glowing blue flowers, sparkles drifting, a traveler touching a petal, vibrant color grading and heroic fantasy vibe.',
			'A serene waterfall cave with glowing crystals and calm waters, an adventurer exploring slowly, soft brush strokes and natural warm tones.',
			'A pastel desert with ancient magical ruins buried in sand, a lone traveler walking with the wind, emotional sky palette and realistic lighting.',
			'A magical observatory on a hill with floating star maps, a young explorer gazing upward, bold contrast and stylish character-focused framing.',
			'A quiet village road at dusk with warm lights and tiny floating spirits, a traveler strolling calmly, high-detail fantasy atmosphere like a JRPG world map scene.',
			'A tranquil bamboo forest with floating lights, a wandering monk-like traveler walking, soft green palette and gentle hand-painted feel.',
			'A cliffside overlooking a glowing magical ocean, shimmering waves, a small explorer with a lantern, hyper-detailed sky and reflections.',
			'A giant ancient tree covered with glowing runes, an adventurer reading a map beneath it, clean bright highlights and dramatic perspective.',
			'A dreamy magical garden with floating stones and sparkling blossoms, warm sunlight, a curious traveler exploring, dynamic fantasy game illustration style.'
		];

		let promptKey = Math.floor(Math.random() * 25) + 1;

		const inputs = {
			prompt: prompts[promptKey],
		};

		const response = await env.AI.run(
			"@cf/stabilityai/stable-diffusion-xl-base-1.0",
			inputs,
		);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
