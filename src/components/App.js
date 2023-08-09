import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CheckOut } from "./CheckOut/CheckOut";
import { NavBar } from "./BookMyShow/NavBar/NavBar";
import { WishList } from "./WishList/WishList";
import Movie from "../components/BookMyShow/Movies/singleMovie";
import TicketBooking from "./BookMyShow/TicketBooking/TicketBooking";
import PremierMovie from "./BookMyShow/premierMovie/PremierMovie";
import Recommovie from "./BookMyShow/recommendedmovie/Recommovie";

function App() {
  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/wishlist" element={<><NavBar /><WishList /></>} />
          <Route path="/ticket-booking" element={<TicketBooking />} />
          <Route path="/single-movie/:id" element={<Movie />} /> {/* Updated route with movie ID */}
          <Route path="/premierMovie" element={<PremierMovie/>}/>
          <Route path="/recommovi" element={<React/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
