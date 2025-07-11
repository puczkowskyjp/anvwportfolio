import { Image } from "@kobalte/core/image";

export default function NotFound() {
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="max-6-xs text-6xl text-charcoal-gray font-thin my-8">Hold it right there pal</h1>
      <p class="mt-8">
        Whoops...where'd it go? This page doesn't exist.
      </p>
      <Image fallbackDelay={600} class="m-8" >
        <Image.Img
          class="w-full max-w-md mx-auto rounded-lg"
          src="/images/not-found.jpeg"
          alt="Kid looking in an empty engine bay, wondering where the engine went."
        />
      </Image>
    </main>
  );
}
