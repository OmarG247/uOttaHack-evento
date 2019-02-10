var circleRadii = [10, 30, 40, 55, 70, 20, 30];

let fbData = {
    p1 : {
        status: 'going', 
        friends: ["p2"],
    }, 
    p2 : {
        status : 'interested',
        friends: ["p1", "p3"],
    },
    p3 : {
        status : 'going',
        friends: ["p2", "p1"]
    }
}

d3.select('[id="graph"]').selectAll(".circles-handling")
    .data(circleRadii)
    .enter()
    .append('circle')
    .attr('r', function (size, i) {
        return size;
    })
    .attr('cy', 50)
    .attr('cx', function (size, i) {
        return i * 100 + 40
    })
    .style('fill', function (size, i) {
        return size <= 30 ? 'blue' : 'red'
    })
    .on('mouseover', function (data, index, node) {
        d3.select(this).attr('r', function (rad, index) {
            return 1.2 * rad
        });
    })
    .on('mouseout', function (data, index, node) {
        d3.select(this).attr('r', function (rad, index) {
            return rad / 1.2
        });
    })