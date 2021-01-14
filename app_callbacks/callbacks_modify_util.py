def show_operation_order(operations, x):
    """
    Create text showing order of modify operations
    """
    for op in operations:
        if op[0] == 'smooth' and op[1]:
            x = 'Smooth(' + x + ')'
        if op[0] == 'derive' and op[1]:
            x = 'Derive(' + x + ')'
        if op[0] == 'fit' and op[1]:
            x = 'Fit(' + x + ')'
    return x