
function predict(data,weight){
    var f = 0;
    weight = [0.01936,0.02118,0.01877,0.01121,0.01027,0.07437,0.09542,0.01460,0.01339,0.03603,0.54000,0.07675,0.03681,0.01144,0.01225,0.00816];
    for(var j=0;j<data.length;j++) {
      f += data[j] * weight[j];
    }
    return f > 0 ? 1 : -1;
}