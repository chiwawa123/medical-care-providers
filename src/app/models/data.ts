export class Data {
  services: { id: number, title: string, description: string ,image:string }[] = [
      {
          id: 1,
          title: 'Companionship Services',
          description: 'Providing social interaction and emotional support for clients',
          image:'assets/img/care1.jpg'
      },
      {
          id: 2,
          title: 'Home Help and Domestic Assistance',
          description: 'Offering assistance with daily household tasks',
            image:'assets/img/care.jpg'
      },
      {
          id: 3,
          title: 'Domiciliary Care',
          description: 'Personal care assistance (bathing, dressing, grooming). Medication management. Meal preparation and nutritional support. Household chores and domestic support. Mobility and transport assistance.'
          ,image:'assets/img/care2.jpg'
      },
      {
          id: 4,
          title: 'Respite Care',
          description: 'Temporary relief of primary caregivers. Short term home care services. Overnight and weekend care options. Emergency respite care',
            image:'assets/img/care3.jpg'
      },
      {
          id: 5,
          title: 'Specialized Care',
          description: 'Post-operative and rehabilitation support. Disability support services',
            image:'assets/img/care4.jpg'
      }
  ];
}
