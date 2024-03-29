---
title: 3.24 工程图
icon: markdown
category:
  - Help
tag:
  - Help
---

## 3-24 工程图
### 3-24-1. 功能描述
主要实现阀块零件或装配体的快速出图。
适用环境：零件环境、装配体环境；
### 3-24-2. 功能界面
![图片](/images/25007737.png)
### 3-24-3. 操作方法
1、在零件环境或装配体环境，单击“工程图”命令；
2、若同目录下存在同名的工程图，则提示用户是否直接打开图纸；
![图片](/images/25007780.png)
3、若同目录下不存在同名的工程图，则弹出“创建工程图”界面；
![图片](/images/25007737.png)
4、选择出图的图纸模板，单击“确定”后，将自动输出图纸并标注尺寸
![图片](/images/25007882.png)
**Tips：可以双击选择工程图模板后自动出图**

## 3-22. 定义约束
### 3-22-1. 功能描述
主要为装配元件定义配合基准，以便装配时自动配合约束；
适用环境：零件环境、装配体环境；
### 3-22-2. 功能界面
![图片](/images/25008132.png)
### 3-22-3. 操作方法
1、打开一个装配元件（零件或装配体）后，单击“定义约束”命令，将弹出如图所示界面；
2、在模型视图区域，分别选择安装面、中心轴、定位轴（可选）的参考面；
安装面——指与阀块表面重合配合的平面，必选；
中心轴——指与单孔或多孔中的第一个孔同心配合的柱面，必选；
定位轴——指与多孔中的第二个孔同心配合的柱面，多孔必选，单孔不选；
**Tips：定义约束时，特别是多孔孔腔，需要参照对应孔腔的顺序定义**

## 3-23. 定义装配
### 3-23-1. 功能描述
主要实现为阀块快速装配元件；
适用环境：零件环境、装配体环境；
### 3-23-2. 功能界面
![图片](/images/25008433.png)
### 3-23-3. 操作方法
1、单击“定义装配”命令后，若同目录下存在同名装配体，则提示是否打开，若无，则提示将创建一个新装配体文件，包括阀块零件，并弹出“定义装配”界面；
2、在装配列表中，选择某一孔腔后，软件将根据后台配置，在零部件列表中显示与所选孔腔对应的元件模型；
**当多个孔腔将装配同一个模型文件时，可多选孔腔**
![图片](/images/25025880.png)
3、依次选择孔腔对应的模型文件，若选择孔腔后，零部件列表未显示，则说明该孔腔未配置对应的模型，可以通过单击零部件列表页的“元件库”自行从本地电脑中选择要装配的模型文件；
**备注：无需为每个孔腔定义装配元件，可根据实际需求选择装配，即软件只装配已定义装配元件的**
![图片](/images/25026015.png)
4、单击“检查基准”命令，软件将自动检查模型是否已定义了装配基准，即零部件的“定义约束”；
若未找到对应模型文件或者有对应模型文件但未定义约束的，则基准单元格显示“-”；
若有对应模型文件且已定义约束的，则基准单元格显示“+”；
**备注：检查基准无法检查出元件装配基准是否正确，只能检查是否有定义了装配基准**
![图片](/images/25026062.png)
5、装配元件定义完成后，单击“装配”命令，软件将自动装配元件；
若未装配该孔腔元件，则状态单元格显示“×”；
若已装配该孔腔元件，则状态单元格显示“√”；
**备注：装配状态只是判断当前装配体中是否已插入该装配元件**
![图片](/images/25026120.png)

## 3-24. 孔腔标注
### 3-24-1. 功能描述
主要实现在阀块工程图中，为单个孔腔创建孔腔标注代号的功能，适用于已出图后新增的孔腔标注；
适用环境：工程图环境；
### 3-24-2. 功能界面
无界面，操作方式同SW的孔标注功能；
### 3-24-3. 操作方法
1、单击菜单栏中的“孔腔标注”命令，此时该命令处于选中状态，即灰底凹陷状态；
![图片](/images/25026449.png)
2、在工程图视图上选择某孔腔的圆弧，软件将自动获取该孔腔的数据，并自动标注孔腔代号；
3、再次单击“孔腔标注”命令，将退出标注状态，或者直接按键盘Esc键退出命令；

## 3-25. 加工表
### 3-25-1. 功能描述
主要实现在阀块工程图中，输出阀块的加工表单；
适用环境：工程图环境；
### 3-25-2. 功能界面
无界面，操作方式同SW的孔标注功能；
### 3-25-3. 操作方法
1、单击菜单栏中的“孔腔标注”命令，软件将自动输出加工表；
2、每个视图孔腔附近会自动标注上孔号，以便与加工表对应识别；
![图片](/images/25026987.png)
3、将加工表拖拽至合适的位置，若表格数据过多，可通过SW自身表格的功能进行分割；
![图片](/images/25026950.png)
