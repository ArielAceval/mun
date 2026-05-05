import { Injectable } from '@angular/core';

export type UserRole = 'nina' | 'cuidador';

export interface AppUser {
  nombre: string;
  email: string;
  rol: UserRole;
}

interface StoredUser extends AppUser {
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USERS_KEY = 'mun_users';
  private readonly SESSION_KEY = 'mun_session';

  register(nombre: string, email: string, password: string, rol: UserRole): boolean {
    const users = this.getStoredUsers();
    if (users.find(u => u.email === email)) {
      return false;
    }
    users.push({ nombre, email, password, rol });
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): AppUser | null {
    const users = this.getStoredUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return null;
    const appUser: AppUser = { nombre: user.nombre, email: user.email, rol: user.rol };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(appUser));
    return appUser;
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  getCurrentUser(): AppUser | null {
    const raw = localStorage.getItem(this.SESSION_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AppUser;
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  private getStoredUsers(): StoredUser[] {
    const raw = localStorage.getItem(this.USERS_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as StoredUser[];
    } catch {
      return [];
    }
  }
}
