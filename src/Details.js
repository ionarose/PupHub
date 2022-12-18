// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import fetchPet from "./FetchPet";
// import Carousel from "./Carousel";

// const Details = () => {
//   const { id } = useParams();
//   //give the key of what we're requesting -> query key. Store here (details) in cache.
//   //if details for {id} are not in cache, fun fetchPet.

//   const results = useQuery(["details", id], fetchPet);

//   //while awaiting promise (no await in the render return - jsx). Necessary - react will start the fetch then move on, loading must be handled
//   if (results.isLoading) {
//     return (
//       <div className="loading-pane">
//         <h2 className="loader">🌀</h2>
//       </div>
//     );
//   }
// //if it made it past the if, pet is available and ready to go
//   const pet = results.data.pets[0];

//   handleIndexClick = event => {
//     this.setState({
//       active: +event.target.dataset.index
//     });
//   };

//   return (
//     <div className="details">
//       <Carousel images={pet.images} />
//       <div>
//         <h1>{pet.name}</h1>
//         <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
//         <button>Adopt {pet.name}</button>
//         <p>{pet.description}</p>
//       </div>
//     </div>
//   );
// };

// export default Details;
import { useState, useContext } from "react";
import Modal from "./Modal";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = () => {
  const navigate = useNavigate();
  const [, setAdoptedPet] = useContext(AdoptedPetContext);

  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>;
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                ;<button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
