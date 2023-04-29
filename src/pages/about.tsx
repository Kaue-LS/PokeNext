import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>Sobre o projeto: </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore
        voluptatem fuga vel iure! Eaque, aliquid. Repellat numquam, esse libero
        tempora eaque aut facere, architecto iusto magni modi, laboriosam vel.
      </p>
      <Image
        src={"/images/charizard.png"}
        width={300}
        height={300}
        alt="Charizard"
      />
    </div>
  );
}
