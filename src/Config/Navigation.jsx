import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Common/Loader";

const Hero = lazy(() => import("../Components/Hero"));

const PrivacyPolicy = lazy(() => import("../Components/PrivacyPolicy"));

const TermsAndConditions = lazy(() =>
  import("../Components/TermsAndConditions")
);

const HelpCenter = lazy(() => import("../Components/HelpCenter"));

const FaqUmrah = lazy(() => import("../Components/FaqUmrah"));

const AboutUs = lazy(() => import("../Components/AboutUs"));

const SpecialDeals = lazy(() => import("../Components/SpecialDeals"));

const SearchBooking = lazy(() => import("../Components/SearchBooking"));


const MyOrders = lazy(() => import("../Components/MyOrders"));


const Stepper = lazy(() => import("../Components/PaymentSection/Stepper"));

const UmrahPackageList = lazy(() => import("../Components/UmrahPackageList"));






function Navigation() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Hero />
          </Suspense>
        }
      />

      <Route
        path="/privacypolicy"
        element={
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        }
      />

      <Route
        path="/termsconditions"
        element={
          <Suspense fallback={<Loader />}>
            <TermsAndConditions />
          </Suspense>
        }
      />

      <Route
        path="/helpcenter"
        element={
          <Suspense fallback={<Loader />}>
            <HelpCenter />
          </Suspense>
        }
      />

      <Route
        path="/specialdeals"
        element={
          <Suspense fallback={<Loader />}>
            <SpecialDeals />
          </Suspense>
        }
      />

      <Route
        path="/faqumrah"
        element={
          <Suspense fallback={<Loader />}>
            <FaqUmrah />
          </Suspense>
        }
      />

      <Route
        path="/aboutus"
        element={
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        }
      />

      <Route
        path="/searchbooking"
        element={
          <Suspense fallback={<Loader />}>
            <SearchBooking />
          </Suspense>
        }
      />


<Route
        path="/myorder"
        element={
          <Suspense fallback={<Loader />}>
            <MyOrders />
          </Suspense>
        }
      />


<Route
        path="/stepper"
        element={
          <Suspense fallback={<Loader />}>
            <Stepper />
          </Suspense>
        }
      />

<Route
        path="/umrahpkglist"
        element={
          <Suspense fallback={<Loader />}>
            <UmrahPackageList />
          </Suspense>
        }
      />


    </Routes>
  );
}

export default Navigation;
