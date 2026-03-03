import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LogIn, Save, LogOut, LayoutDashboard, Utensils, Image as ImageIcon, FileText } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [activeTab, setActiveTab] = useState('about');
  const [data, setData] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/check-auth');
      if (res.ok) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch('/api/data');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setError('Ongeldige inloggegevens');
      }
    } catch (err) {
      setError('Er is een fout opgetreden');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setIsAuthenticated(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    try {
      const res = await fetch('/api/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSaveMessage('Wijzigingen succesvol opgeslagen!');
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setSaveMessage('Fout bij opslaan.');
      }
    } catch (err) {
      setSaveMessage('Fout bij opslaan.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-legend-paper">Laden...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-legend-paper px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-legend-dark mb-2">Admin Login</h1>
            <p className="text-gray-500">Log in om de website te beheren</p>
          </div>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gebruikersnaam</label>
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Wachtwoord</label>
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-legend-dark text-white py-3 rounded-lg font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 mt-6"
            >
              <LogIn size={18} /> Inloggen
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!data) return <div className="min-h-screen flex items-center justify-center bg-legend-paper">Gegevens laden...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-legend-dark text-white p-6 flex flex-col">
        <div className="mb-8 flex items-center gap-3">
          <LayoutDashboard className="text-legend-gold" />
          <h2 className="text-xl font-serif tracking-wider uppercase">Dashboard</h2>
        </div>
        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('about')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${activeTab === 'about' ? 'bg-white/10 text-legend-gold' : 'hover:bg-white/5'}`}
          >
            <FileText size={18} /> Over Ons
          </button>
          <button 
            onClick={() => setActiveTab('menu')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${activeTab === 'menu' ? 'bg-white/10 text-legend-gold' : 'hover:bg-white/5'}`}
          >
            <Utensils size={18} /> Menu
          </button>
        </nav>
        <div className="pt-8 mt-auto border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-left text-gray-300"
          >
            <LogOut size={18} /> Uitloggen
          </button>
          <a href="/" className="block mt-4 text-center text-sm text-legend-gold hover:underline">Terug naar website</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif text-legend-dark">
              {activeTab === 'about' && 'Over Ons Aanpassen'}
              {activeTab === 'menu' && 'Menu Beheren'}
            </h1>
            <div className="flex items-center gap-4">
              {saveMessage && <span className="text-sm text-green-600 font-medium">{saveMessage}</span>}
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="bg-legend-gold text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <Save size={18} /> {isSaving ? 'Opslaan...' : 'Opslaan'}
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
                  <input 
                    type="text" 
                    value={data.about.title}
                    onChange={e => setData({...data, about: {...data.about, title: e.target.value}})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Paragraaf 1</label>
                  <textarea 
                    rows={4}
                    value={data.about.text1}
                    onChange={e => setData({...data, about: {...data.about, text1: e.target.value}})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Paragraaf 2</label>
                  <textarea 
                    rows={4}
                    value={data.about.text2}
                    onChange={e => setData({...data, about: {...data.about, text2: e.target.value}})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-legend-gold focus:border-legend-gold"
                  />
                </div>
              </div>
            )}

            {activeTab === 'menu' && (
              <div className="space-y-8">
                <p className="text-sm text-gray-500 mb-4">Bewerk hier de gerechten per categorie. Let op: sla uw wijzigingen op voordat u de pagina verlaat.</p>
                {Object.keys(data.menu).map(category => (
                  <div key={category} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 font-medium text-lg">{category}</div>
                    <div className="p-6 space-y-4">
                      {data.menu[category].map((item: any, index: number) => (
                        <div key={index} className="grid grid-cols-12 gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                          <div className="col-span-4">
                            <label className="block text-xs text-gray-500 mb-1">Naam</label>
                            <input 
                              type="text" 
                              value={item.name}
                              onChange={e => {
                                const newMenu = {...data.menu};
                                newMenu[category][index].name = e.target.value;
                                setData({...data, menu: newMenu});
                              }}
                              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-legend-gold focus:border-legend-gold"
                            />
                          </div>
                          <div className="col-span-6">
                            <label className="block text-xs text-gray-500 mb-1">Beschrijving</label>
                            <input 
                              type="text" 
                              value={item.description}
                              onChange={e => {
                                const newMenu = {...data.menu};
                                newMenu[category][index].description = e.target.value;
                                setData({...data, menu: newMenu});
                              }}
                              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-legend-gold focus:border-legend-gold"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-xs text-gray-500 mb-1">Prijs</label>
                            <input 
                              type="text" 
                              value={item.price}
                              onChange={e => {
                                const newMenu = {...data.menu};
                                newMenu[category][index].price = e.target.value;
                                setData({...data, menu: newMenu});
                              }}
                              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-legend-gold focus:border-legend-gold"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
