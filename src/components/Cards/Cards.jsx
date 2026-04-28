import Image from "next/image";
import React from "react";

import { Button, Card, Chip, Link } from "@heroui/react";
import { BiSolidLike } from "react-icons/bi";


const Cards = ({ topGenData }) => {
  const {id, title, imageUrl, category, likes, downloads } = topGenData;
  return (
    <div>
      {/* Right Column */}
      <Card className="min-h-[300px] overflow-hidden rounded-xl text-white hover:shadow hover:scale-105 transition-all duration-300">
        {/* Background image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          aria-hidden="true"
          className="absolute inset-0 object-cover"
        />

        {/* Header */}
        <Card.Header className="z-10">
          <Card.Title className="text-xs font-bold tracking-wide text-white absolute">
            <p>{title}</p>
          </Card.Title>
          <Card.Title className="text-xs font-semibold tracking-wide text-white right-3 absolute">
            <Chip color="accent">{category}</Chip>
          </Card.Title>
        </Card.Header>

        {/* Footer */}
        <Card.Footer className="z-10 mt-auto flex items-center justify-between font-medium">
          <div>
            <div className="text-[15px] font-medium flex items-center gap-1">
              {likes}
              <BiSolidLike size={20} />
            </div>
            <div className="text-xs">Downloads: {downloads}</div>
          </div>
          <Link href={`/all-photos/${id}`}>
            <Button size="sm" variant="secondary">
              View Details
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cards;
