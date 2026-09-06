import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import EquiposPage from './pages/DashboardPage/EquiposPage/EquiposPage';
import NuevoEquipoPage from './pages/DashboardPage/NuevosEquiposPage/NuevoEquipoPage';
import DetalleEquipoPage from './pages/DashboardPage/DetalleEquipoPage/DetalleEquipoPage';
import LoginPage from './pages/DashboardPage/LoginPage/LoginPage';
import PerfilPage from './PerfilPage/PerfilPage';
import { ProtectedRoute } from './routes/ProtectedRoute';
import PrestamosPage from './pages/PrestamosPage/PrestamosPage';
import TicketeraPage from './pages/TicketeraPage/TicketeraPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="perfil" element={<PerfilPage />} />
        <Route path="prestamos" element={<PrestamosPage />} />
        <Route path="ticketera" element={<TicketeraPage />} />

        {/* Solo ADMINISTRADOR */}
        <Route
          path="inventario"
          element={
            <ProtectedRoute rolesPermitidos={['administrador']}>
              <EquiposPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="inventario/nuevo"
          element={
            <ProtectedRoute rolesPermitidos={['administrador']}>
              <NuevoEquipoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="inventario/:placaSena"
          element={
            <ProtectedRoute rolesPermitidos={['administrador']}>
              <DetalleEquipoPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
