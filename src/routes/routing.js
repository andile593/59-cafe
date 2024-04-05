import { Route } from "react-router-dom"

const Routing = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />

                <Route
                    path="/checkout"
                    element={
                        <ProtectedRoute>
                            <Checkout />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-create"
                    element={
                        <ProtectedRoute>
                            <Create />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-products"
                    element={
                        <ProtectedRoute>
                            <AdminProducts />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-orders"
                    element={
                        <ProtectedRoute>
                            <Orders />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-customers"
                    element={
                        <ProtectedRoute>
                            <Customers />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-settings"
                    element={
                        <ProtectedRoute>
                            <Settings />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter >
    )
}