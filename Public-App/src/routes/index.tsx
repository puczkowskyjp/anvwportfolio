import { Title, Meta } from "@solidjs/meta";
import { Image } from "@kobalte/core/image";

export default function Home() {
  return (
    <main class="text-center mx-auto text-charcoal-gray p-4">
      <Title>Home</Title>
      <Meta name="Code & Carbs" content="Home page describing my website"></Meta>
      <h1 
        class="max-6-xs text-6xl text-charcol-gray font-space alfa-slab-one-regular my-16"
      >Code & Carburetors</h1>
      <Image fallbackDelay={600}>
        <Image.Img
          class="w-full max-w-lg mx-auto rounded-lg"
          src="/images/me-and-the-bus.jpeg" 
          alt="Photo of author and their new bus"
        />
      </Image>
      <p class="mt-4 max-w-prose mx-auto text-center">Restoring a 1971 VW Bus with a geospatial developer’s mindset: carefully versioned, semi-documented, and mostly held together with zip ties.</p>
    </main>
  );
}
