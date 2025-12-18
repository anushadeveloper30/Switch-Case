let traffic = prompt ('What is the color of the traffic light?🚦');

switch (traffic){
    case 'red':
    case 'Red':
    case 'RED':
        alert('strop!wait for a while 🔴')
    break ;
    case 'yellow':
    case 'Yellow':
    case 'YELLOW':
        alert('Get Ready to go 🟡');
    break ;
    case 'green':
    case 'Green':
    case 'GREEN':
        alert ('Go ahead! 🟢');
        break ;
        default :
        alert ('This is not a valid traffic color');
}
