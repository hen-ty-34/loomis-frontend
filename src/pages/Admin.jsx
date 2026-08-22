import { useEffect, useState } from "react";
import "./Admin.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

function Admin() {
  const [formData, setFormData] = useState({
    customerName: "",
    origin: "",
    destination: "",
    currentLocation: "",
    estimatedDelivery: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [createdShipment, setCreatedShipment] = useState(null);
  const [shipments, setShipments] = useState([]);
  const [shipmentsLoading, setShipmentsLoading] = useState(true);
  const [shipmentsError, setShipmentsError] = useState("");
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [updateData, setUpdateData] = useState({
    status: "",
    currentLocation: "",
    description: "",
  });
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchShipments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  };

  const fetchShipments = async () => {
    try {
      setShipmentsLoading(true);
      setShipmentsError("");

      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_BASE}/api/shipments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Unable to load shipments.");
      }

      const payload = Array.isArray(data) ? data : data.shipments || data.data || [];

      const normalized = payload.map((shipment) => ({
        id: shipment.id || shipment.trackingNumber || shipment.tracking_number,
        tracking_number: shipment.tracking_number || shipment.trackingNumber || shipment.id,
        customer_name: shipment.customer_name || shipment.customerName || shipment.customer || "Customer",
        origin: shipment.origin || "Unknown origin",
        destination: shipment.destination || "Unknown destination",
        current_location: shipment.current_location || shipment.currentLocation || shipment.location || "—",
        status: shipment.status || "Created",
      }));

      setShipments(normalized);
    } catch (error) {
      setShipmentsError(error.message);
      setShipments([]);
    } finally {
      setShipmentsLoading(false);
    }
  };

  const selectShipment = async (trackingNumber) => {
    try {
      setUpdateMessage("");

      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${API_BASE}/api/shipments/${encodeURIComponent(trackingNumber)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Unable to load shipment.");
      }

      const data = await response.json();
      const shipment = data.shipment || data;

      if (!shipment) {
        throw new Error("No shipment data received from API");
      }

      const normalized = {
        id: shipment.id || shipment.trackingNumber || shipment.tracking_number,
        trackingNumber: shipment.tracking_number || shipment.trackingNumber || shipment.id,
        customerName: shipment.customer_name || shipment.customerName || shipment.customer || "Customer",
        origin: shipment.origin || "Unknown origin",
        destination: shipment.destination || "Unknown destination",
        currentLocation: shipment.current_location || shipment.currentLocation || shipment.location || "—",
        estimatedDelivery: shipment.estimated_delivery || shipment.estimatedDelivery,
        status: shipment.status || "Created",
        trackingHistory: shipment.trackingHistory || shipment.history || [],
      };

      setSelectedShipment(normalized);
      setUpdateData({
        status: normalized.status || "",
        currentLocation: normalized.currentLocation || "",
        description: "",
      });
    } catch (error) {
      setUpdateMessage(error.message || "An error occurred while loading the shipment");
      setSelectedShipment(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setCreatedShipment(null);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_BASE}/api/shipments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Unable to create shipment.");
      }

      setCreatedShipment(data.shipment);
      setMessage("Shipment created successfully.");
      setFormData({
        customerName: "",
        origin: "",
        destination: "",
        currentLocation: "",
        estimatedDelivery: "",
      });

      await fetchShipments();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;

    setUpdateData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleShipmentUpdate = async (e) => {
    e.preventDefault();

    if (!selectedShipment) return;

    setUpdateLoading(true);
    setUpdateMessage("");

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${API_BASE}/api/shipments/${encodeURIComponent(selectedShipment.trackingNumber)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Unable to update shipment.");
      }

      setUpdateMessage("Shipment updated successfully.");
      await selectShipment(selectedShipment.trackingNumber);
      await fetchShipments();
    } catch (error) {
      setUpdateMessage(error.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  const totalShipments = shipments.length;
  const pendingShipments = shipments.filter(
    (shipment) => shipment.status?.toLowerCase() === "pending"
  ).length;
  const inTransitShipments = shipments.filter(
    (shipment) => shipment.status?.toLowerCase() === "in transit"
  ).length;
  const deliveredShipments = shipments.filter(
    (shipment) => shipment.status?.toLowerCase() === "delivered"
  ).length;

  const filteredShipments = shipments.filter((shipment) => {
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      shipment.tracking_number?.toLowerCase().includes(query) ||
      shipment.customer_name?.toLowerCase().includes(query) ||
      shipment.origin?.toLowerCase().includes(query) ||
      shipment.destination?.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All" || shipment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="admin-container">
          <span className="admin-label">ADMINISTRATION</span>
          <h1>
            Create
            <br />
            shipment.
          </h1>
          <p>
            Create a new shipment and generate a unique tracking number for your customer.
          </p>
        </div>

        <button type="button" className="admin-logout" onClick={handleLogout}>
          LOG OUT →
        </button>
      </div>

      <section className="admin-dashboard-section">
        <div className="admin-container">
          <div className="dashboard-heading">
            <div>
              <span className="admin-label">SHIPMENT MANAGEMENT</span>
              <h2>All shipments</h2>
            </div>
            <span className="shipment-count">{shipments.length} shipments</span>
          </div>

          <div className="dashboard-stats">
            <div className="stat-card">
              <span>TOTAL SHIPMENTS</span>
              <strong>{totalShipments}</strong>
            </div>
            <div className="stat-card">
              <span>PENDING</span>
              <strong>{pendingShipments}</strong>
            </div>
            <div className="stat-card">
              <span>IN TRANSIT</span>
              <strong>{inTransitShipments}</strong>
            </div>
            <div className="stat-card">
              <span>DELIVERED</span>
              <strong>{deliveredShipments}</strong>
            </div>
          </div>

          <div className="shipment-controls">
            <div className="shipment-search">
              <input
                type="text"
                placeholder="Search tracking number, customer or destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="shipment-filter">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All status</option>
                <option value="Pending">Pending</option>
                <option value="Picked Up">Picked Up</option>
                <option value="In Transit">In Transit</option>
                <option value="At Customs">At Customs</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>

          {shipmentsLoading && (
            <div className="dashboard-message">Loading shipments...</div>
          )}

          {shipmentsError && (
            <div className="dashboard-message error">{shipmentsError}</div>
          )}

          {!shipmentsLoading && !shipmentsError && filteredShipments.length === 0 && (
            <div className="dashboard-message">No shipments have been created yet.</div>
          )}

          <div className="shipment-list">
            {filteredShipments.map((shipment) => (
              <div
                className={`shipment-card ${
                  selectedShipment?.trackingNumber === shipment.tracking_number
                    ? "shipment-card-active"
                    : ""
                }`}
                key={shipment.id}
                onClick={() => selectShipment(shipment.tracking_number)}
              >
                <div className="shipment-card-main">
                  <span className="shipment-tracking">{shipment.tracking_number}</span>
                  <h3>{shipment.customer_name}</h3>
                  <div className="shipment-route">
                    {shipment.origin}
                    <span>→</span>
                    {shipment.destination}
                  </div>
                </div>

                <div className="shipment-card-location">
                  <span>CURRENT LOCATION</span>
                  <strong>{shipment.current_location || "—"}</strong>
                </div>

                <div className="shipment-card-status">
                  <span className="status-badge">{shipment.status}</span>
                </div>

                <div className="shipment-card-action">VIEW →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {updateMessage && !selectedShipment && (
        <section className="shipment-details-section">
          <div className="admin-container">
            <div className="dashboard-message error">{updateMessage}</div>
            <button
              className="close-details"
              onClick={() => {
                setUpdateMessage("");
              }}
            >
              ← Close
            </button>
          </div>
        </section>
      )}

      {selectedShipment && (
        <section className="shipment-details-section">
          <div className="admin-container">
            <button
              className="close-details"
              onClick={() => {
                setSelectedShipment(null);
                setUpdateMessage("");
              }}
            >
              ← Close shipment
            </button>

            <div className="shipment-details-header">
              <div>
                <span className="admin-label">SHIPMENT DETAILS</span>
                <h2>{selectedShipment.trackingNumber}</h2>
              </div>
              <div className="detail-status">{selectedShipment.status}</div>
            </div>

            <div className="shipment-detail-grid">
              <div className="detail-item">
                <span>CUSTOMER</span>
                <strong>{selectedShipment.customerName}</strong>
              </div>
              <div className="detail-item">
                <span>ORIGIN</span>
                <strong>{selectedShipment.origin}</strong>
              </div>
              <div className="detail-item">
                <span>DESTINATION</span>
                <strong>{selectedShipment.destination}</strong>
              </div>
              <div className="detail-item">
                <span>CURRENT LOCATION</span>
                <strong>{selectedShipment.currentLocation}</strong>
              </div>
              <div className="detail-item">
                <span>ESTIMATED DELIVERY</span>
                <strong>
                  {selectedShipment.estimatedDelivery
                    ? new Date(selectedShipment.estimatedDelivery).toLocaleDateString()
                    : "—"}
                </strong>
              </div>
            </div>

            <div className="admin-update-area">
              <div className="update-heading">
                <span className="admin-label">UPDATE SHIPMENT</span>
                <h3>Update journey</h3>
              </div>

              <form className="shipment-update-form" onSubmit={handleShipmentUpdate}>
                <div className="form-field">
                  <label>Status</label>
                  <select
                    name="status"
                    value={updateData.status}
                    onChange={handleUpdateChange}
                    required
                  >
                    <option value="">Select status</option>
                    <option value="Pending">Pending</option>
                    <option value="Picked Up">Picked Up</option>
                    <option value="In Transit">In Transit</option>
                    <option value="At Customs">At Customs</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Current location</label>
                  <input
                    type="text"
                    name="currentLocation"
                    placeholder="e.g. Lagos, Nigeria"
                    value={updateData.currentLocation}
                    onChange={handleUpdateChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Update description</label>
                  <textarea
                    name="description"
                    placeholder="Describe what happened to the shipment..."
                    value={updateData.description}
                    onChange={handleUpdateChange}
                    rows="5"
                  />
                </div>

                <button type="submit" className="create-shipment-button" disabled={updateLoading}>
                  {updateLoading ? "Updating..." : "Update shipment"}
                  <span>→</span>
                </button>
              </form>

              {updateMessage && (
                <div
                  className={`admin-message ${
                    updateMessage.includes("successfully") ? "success" : "error"
                  }`}
                >
                  {updateMessage}
                </div>
              )}
            </div>

            <div className="admin-history">
              <div className="update-heading">
                <span className="admin-label">TRACKING HISTORY</span>
                <h3>Shipment journey</h3>
              </div>

              <div className="admin-timeline">
                {selectedShipment.trackingHistory?.map((event) => (
                  <div className="admin-timeline-item" key={event.id}>
                    <div className="admin-timeline-marker">●</div>
                    <div>
                      <h4>{event.status}</h4>
                      <span>{event.location}</span>
                      <p>{event.description}</p>
                      <small>{new Date(event.created_at).toLocaleString()}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="admin-form-section">
        <div className="admin-container">
          <form className="shipment-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Customer name</label>
              <input
                type="text"
                name="customerName"
                placeholder="e.g. Jane Doe"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Origin</label>
                <input
                  type="text"
                  name="origin"
                  placeholder="e.g. Accra, Ghana"
                  value={formData.origin}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Destination</label>
                <input
                  type="text"
                  name="destination"
                  placeholder="e.g. London, UK"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Current location</label>
                <input
                  type="text"
                  name="currentLocation"
                  placeholder="e.g. Accra, Ghana"
                  value={formData.currentLocation}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Estimated delivery</label>
                <input
                  type="date"
                  name="estimatedDelivery"
                  value={formData.estimatedDelivery}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="create-shipment-button" disabled={loading}>
              {loading ? "Creating..." : "Create shipment"}
              <span>→</span>
            </button>
          </form>

          {message && (
            <div className={`admin-message ${createdShipment ? "success" : "error"}`}>
              {message}
            </div>
          )}

          {createdShipment && (
            <div className="created-shipment">
              <span>TRACKING NUMBER</span>
              <h2>{createdShipment.trackingNumber}</h2>
              <p>
                Give this tracking number to the customer so they can track their shipment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Admin;