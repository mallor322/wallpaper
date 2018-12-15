Page({
    data: {
        phoneWidth: wx.getSystemInfoSync().windowWidth,
        phoneHeight: 4 * wx.getSystemInfoSync().windowWidth / 3,
        cjgd: 120,
        imgUrl: "cloud://room2-9fd8fd.726f-room2-9fd8fd/qbmb/",
        shoujiBihua: "/images/icon/bihua.jpg",
        showView: !0,
        gongneng1: "拍",
        gongneng2: "照",
        gongneng3: "预",
        gongneng4: "览",
        chosedImg: 0,
        xsxz: 0,
        cjxz: "kt",
        fgxz: "bo"
    },
    downLoadqImg: function(t) {
        var a = this;
        wx.showLoading({
            title: "场景加载中...",
            mask: !0
        }), wx.getImageInfo({
            src: t,
            success: function(t) {
                a.setData({
                    qianDa: t.path
                }), wx.hideLoading();
            }
        });
    },
    changeImg: function(t) {
        var a = t.currentTarget.dataset.url, n = this.data.cjxz + this.data.fgxz + ".png", s = this.data.imgUrl + a + n;
        this.downLoadqImg(s);
        this.setData({
            chosedImg: a
        });
    },
    takePhoto: function() {
        var t = this;
        t.data.showView ? t.ctx.takePhoto({
            quality: "high",
            success: function(a) {
                t.setData({
                    shoujiBihua: a.tempImagePath,
                    gongneng1: "返",
                    gongneng2: "回",
                    gongneng3: "相",
                    gongneng4: "机",
                    showView: !1
                });
            }
        }) : t.setData({
            showView: !0,
            gongneng1: "拍",
            gongneng2: "照",
            gongneng3: "预",
            gongneng4: "览"
        });
    },
    openImg: function(t) {
        var a = this;
        wx.chooseImage({
            count: 1,
          sizeType: ["compressed"],
            sourceType: [ "album" ],
            success: function(t) {
                var n = t.tempFilePaths[0];
                wx.getImageInfo({
                    src: n,
                    success: function(t) {
                        a.setData({
                            shoujiBihua: n
                        });
                    }
                });
            }
        });
    },
    setSticker: function(t) {
        t.rect(0, 0, 900, 1200), t.setFillStyle("red"), t.fill();
        var a = this.data.shoujiBihua;
        t.drawImage(a, 0, 0, 900, 1200), t.save(), t.restore(), t.stroke();
    },
    createNewImg: function() {
        var t = this, a = this.data.shoujiBihua, n = this.data.qianDa, s = wx.createCanvasContext("mycanvas");
        a && this.setSticker(s), s.translate(0, 1200), s.rotate(270 * Math.PI / 180), s.drawImage(n, 0, 0, 1200, 900), 
        s.draw(), setTimeout(function() {
            wx.canvasToTempFilePath({
                canvasId: "mycanvas",
                success: function(a) {
                    var n = a.tempFilePath;
                    t.setData({
                        imagePath: n
                    }), wx.navigateTo({
                        url: "/pages/huabu/huabu?path=" + n + "&gaodu=1000"
                    });
                },
                fail: function(t) {},
                complete: function(t) {
                    wx.hideLoading();
                }
            });
        }, 200);
    },
    save: function() {
        var t = this;
        wx.showLoading({
            title: "创建中...",
            duration: 1e4
        }), t.createNewImg();
    },
    bianhao: function(t) {
      for (var a = new Array(), n = 0; n < t; n++) a.push(n);
      this.setData({
          numbar: a
      });
    },
    gbxz: function() {
        this.setData({
            xsxz: 0,
            cjgd: 120
        });
    },
    cjxz: function() {
        this.setData({
            xsxz: 5,
            cjgd: 430
        });
    },
    ktAn: function() {
        this.setData({
            cjxz: "kt"
        }), this.cjsl();
    },
    wsAn: function() {
        this.setData({
            cjxz: "ws"
        }), this.cjsl();
    },
    boAn: function() {
        this.setData({
            fgxz: "bo"
        }), this.cjsl();
    },
    dzhAn: function() {
        this.setData({
            fgxz: "dzh"
        }), this.cjsl();
    },
    msAn: function() {
        this.setData({
            fgxz: "ms"
        }), this.cjsl();
    },
    osAn: function() {
        this.setData({
            fgxz: "os"
        }), this.cjsl();
    },
    xdAn: function() {
        this.setData({
            fgxz: "xd"
        }), this.cjsl();
    },
    zsAn: function() {
        this.setData({
            fgxz: "zs"
        }), this.cjsl();
    },
    cjsl: function() {
        var t = this, a = {
            cj: t.data.cjxz,
            fg: t.data.fgxz
        };
        var db = wx.cloud.database()
        db.collection('cjfg').where({
          cj: a.cj,
          fg: a.fg
        }).get({
          success: res => {
            t.bianhao((res.data)[0].sl);
          },
          fail: res => {
            // console.log(2);
          }
        })
    },
    onReady: function() {
        this.downLoadqImg("cloud://room2-9fd8fd.726f-room2-9fd8fd/qbmb/0ktbo.png"), this.setData({
            numbar: 9
        });
    },
    onLoad: function() {
        this.ctx = wx.createCameraContext();
    }
});