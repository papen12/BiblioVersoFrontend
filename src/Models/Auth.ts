import type { Cliente } from './Cliente';
import type  { Persona } from './Persona';

export interface AuthResponse {
    token: string;
    usuario: {
        cliente: Cliente;
        persona: Persona;
    };
}