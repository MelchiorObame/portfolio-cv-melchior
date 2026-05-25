// Tweaks panel — palette / density / animations / accent
const { useEffect } = React;

function PortfolioTweaks() {
  const [t, setTweak] = useTweaks(window.__TWEAKS || {
    palette: 'cream', density: 'comfy', animations: 'marked', accent: '#ff5a1f'
  });

  useEffect(() => {
    const r = document.documentElement;
    r.setAttribute('data-palette', t.palette);
    r.setAttribute('data-density', t.density);
    r.setAttribute('data-anim', t.animations);
    if (t.palette === 'cream') {
      r.style.setProperty('--accent', t.accent);
    } else {
      r.style.removeProperty('--accent');
    }
  }, [t.palette, t.density, t.animations, t.accent]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette" />
      <TweakRadio
        label="Thème"
        value={t.palette}
        options={[
          { value: 'cream', label: 'Crème' },
          { value: 'ink',   label: 'Encre' },
          { value: 'moss',  label: 'Mousse' },
          { value: 'rose',  label: 'Rose' },
        ]}
        onChange={v => setTweak('palette', v)}
      />

      {t.palette === 'cream' && (
        <TweakColor
          label="Accent"
          value={t.accent}
          options={['#ff5a1f', '#e63946', '#4e7c3a', '#2c5e4f', '#7b3aed']}
          onChange={v => setTweak('accent', v)}
        />
      )}

      <TweakSection label="Mise en page" />
      <TweakRadio
        label="Densité"
        value={t.density}
        options={[
          { value: 'comfy',   label: 'Aéré' },
          { value: 'compact', label: 'Compact' },
        ]}
        onChange={v => setTweak('density', v)}
      />

      <TweakSection label="Animations" />
      <TweakRadio
        label="Niveau"
        value={t.animations}
        options={[
          { value: 'subtle', label: 'Subtil' },
          { value: 'marked', label: 'Marqué' },
          { value: 'none',   label: 'Aucune' },
        ]}
        onChange={v => setTweak('animations', v)}
      />
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<PortfolioTweaks />);
