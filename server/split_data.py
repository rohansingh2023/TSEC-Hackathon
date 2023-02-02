import splitfolders

input_folder = 'data/'

splitfolders.ratio(input_folder, output = 'data2', seed=42, ratio=(.7,.3), group_prefix=None)