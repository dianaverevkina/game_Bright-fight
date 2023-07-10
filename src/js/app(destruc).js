export default function showAttackTypes({ special }) {
  const array = special.map(({
    id, name, icon, description = 'Описание не доступно',
  }) => {
    const attack = {
      id, name, icon, description,
    };
    return attack;
  });

  return array;
}
