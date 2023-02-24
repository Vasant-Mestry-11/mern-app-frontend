import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky screepers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: [40.7484405, -73.9856644],
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky screepers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: [40.7484405, -73.9856644],
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
