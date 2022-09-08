interface PopUpHelpProps {
  id: string;
}

export const PopUpHelp = (props: PopUpHelpProps) => {
  const { id } = props;

  return (
    <div
      id={id}
      className="transition-all duration-500 absolute z-10 -top-full w-full min-h-screen bg-emerald-100"
    >
      <h1 className="text-center mt-14 text-2xl font-bold">Règles du jeux</h1>
      <p className="text-center mt-4 p-4">
        Mode Standard : Seulement les scores des matchs de ligue 1. Mode Low
        Options : Les scores des matchs de ligue 1 + Autres matchs (+ Options ?)
        Mode All Inclusive: Les scores des matchs de ligue 1 + Autres matchs +
        Options + Boosters Une session dure entre 6 et 7 journées. J1 à J7, J8 à
        J13, J14 à J19, J20 à J 25, J 26 à J32 et J33 à J38. Chaque groupe créé
        peut se composer de minium 3 joueurs et pas de maximum. Chaque groupe
        peut coûter : 2+0,5€ (uniquement L1), 5+1€, 10+2€, 20+4€, 50+5€,
        100€+9€, 200€+15€, 500€+30€. Les gains : Pour 3 à 5 joueurs (100% le
        1er), pour 6 à 10 (70% 1er et 30% 2ème), pour 11 à 50 (60% 1er, 30% 2ème
        et 10% le 3ème), pour 51 et + (50% 1er, 30% 2ème et 10% le 3ème, 7% 4ème
        et 3% 5ème).
      </p>
    </div>
  );
};
