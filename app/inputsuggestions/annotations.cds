using MyService as service from '../../srv/my-service';

annotate service.Books with @UI.LineItem:[
    { Label: 'Title', Value: name },
    { Label: 'Price', Value: price },
];