import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import EmployeeRoutes from "./pages/employee/EmployeeRoutes";
import ManagerRoutes from "./pages/manager/ManagerRoutes";
import VendorRoutes from "./pages/vendor/VendorRoutes";
import WarehouseRoutes from "./pages/warehouse/WarehouseRoutes";
import TrackingSummary from "./pages/tracking/TrackingSummary";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="tracking/:trackingId" element={<TrackingSummary />} />
      </Route>

      <Route path="/employee/*" element={<EmployeeRoutes />} />
      <Route path="/manager/*" element={<ManagerRoutes />} />
      <Route path="/vendor/*" element={<VendorRoutes />} />
      <Route path="/warehouse/*" element={<WarehouseRoutes />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
