import prisma from './../src/database.js';

async function main() {
  console.log('Running Seed...');

  const students = [
    { name: 'João Silva' },
    { name: 'Maria Oliveira' },
    { name: 'Luiz Augusto' }
  ];

  await prisma.student.createMany({
    data: students,
    skipDuplicates: true
  });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
