function* WeaponGenerator() {
  yield '长枪';
  yield '短剑';
  yield '屠龙刀';
}
console.log(WeaponGenerator().next());
for (let weapon of WeaponGenerator()) {
  console.log(weapon !== undefined, weapon);
}
